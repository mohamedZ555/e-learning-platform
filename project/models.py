from django.db import models

# Create your models here.
class Role(models.Model):
    role_id = models.AutoField(primary_key=True)  # Auto-incrementing primary key
    role_name = models.CharField(max_length=50, unique=True)  # Name of the role (e.g., 'Student', 'Instructor', 'Admin')
    creation_date = models.DateTimeField(auto_now_add=True)  # Automatically set to the current date and time on creation
    def __str__(self):
        return self.role_name
    
class Student(models.Model):
    student_id = models.AutoField(primary_key=True)  # Auto-incrementing primary key
    student_name = models.CharField(max_length=255)  # Full name of the student
    register_date = models.DateTimeField(auto_now_add=True)  # Automatically set to the current date and time on creation

    def __str__(self):
        return self.student_name
    
class Users(models.Model):
    user_id = models.AutoField(primary_key=True)  # Auto-generated ID
    username = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    role_id = models.ForeignKey('Role', on_delete=models.CASCADE)  # Foreign key to Role
    student_id = models.ForeignKey('Student', on_delete=models.SET_NULL, null=True, blank=True)
    instructor_id = models.ForeignKey('Instructor', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.username
# Department model (for categorizing courses)
class Department(models.Model):
    department_id = models.AutoField(primary_key=True)
    department_name = models.CharField(max_length=255, unique=True)
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.department_name

# Instructor model (instructors who teach the courses)
class Instructor(models.Model):
    instructor_id = models.AutoField(primary_key=True)
    instructor_name = models.CharField(max_length=255)
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.instructor_name

# Course model (main course details)
class Course(models.Model):
    course_id = models.AutoField(primary_key=True)
    course_name = models.CharField(max_length=255, unique=True)
    department = models.ForeignKey('Department', on_delete=models.CASCADE)  # ForeignKey to Department
    instructor = models.ForeignKey('Instructor', on_delete=models.SET_NULL, null=True)  # ForeignKey to Instructor
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.course_name

# CourseDetails model (related to Course model with a one-to-one relationship)
class CourseDetails(models.Model):
    course = models.OneToOneField(Course, on_delete=models.CASCADE)  # One-to-One relationship with Course
    description = models.TextField()  # A description of the course
    duration = models.PositiveIntegerField()  # Duration of the course in hours or weeks
    syllabus = models.TextField()  # The syllabus outline or course content

    def __str__(self):
        return f"Details for {self.course.course_name}"

# Media model (optional, to store media related to courses)
class CourseMedia(models.Model):
    MEDIA_TYPES = [
        ('video', 'Video'),
        ('audio', 'Audio'),
        ('document', 'Document'),
        ('image', 'Image'),
    ]

    media_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='media')  # ForeignKey to Course
    media_type = models.CharField(max_length=20, choices=MEDIA_TYPES)  # Type of media (video, audio, etc.)
    media_file = models.FileField(upload_to='course_media/')  # File upload path
    upload_date = models.DateTimeField(auto_now_add=True)  # Upload date

    def __str__(self):
        return f"{self.media_type.capitalize()} for {self.course.course_name}"