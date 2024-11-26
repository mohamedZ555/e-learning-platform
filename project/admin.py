from django.contrib import admin

# Register your models here.
from .models import Role
from .models import Instructor
from .models import Student, Users, Department, Course, CourseDetails, CourseMedia

#Register models in the Django admin
admin.site.register(Role)
admin.site.register(Instructor)
admin.site.register(Student)
admin.site.register(Users)
admin.site.register(Department)
admin.site.register(Course)
admin.site.register(CourseDetails)
admin.site.register(CourseMedia)
