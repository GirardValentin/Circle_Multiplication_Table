# Circle_Multiplication_Table
Times Table Visualization

The basic idea is to:
  -draw a circle, 
  -define n points equitably spaced, 
  -list the points, 
  -draw a line between point n to point n * the multiplication table to visualize(mt).
  

 Loop the angle of a Circle between 0 to TWO_PI, 
 For any points in the circle :
  where : x = position in the x axis,
        : y = position in the y axis,
        : theta = angle,
        : r = circle raduis,
        
  x = cos(theta) * r,
  y = sin(theta) * r
  
So, for drawing a line from the n point to the n point * multiplication table to visualize(t):
  new x = cos(theta * t) * r;
  new y = sin(theta * t) * r;
  
by Valentin Girard
