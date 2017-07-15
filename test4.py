import stl
import math
import numpy

# Create 3 faces of a cube
data = numpy.zeros(6, dtype=stl.mesh.Mesh.dtype)

# Top of the cube
data['vectors'][0] = numpy.array([[0, 1, 1],
                                  [1, 0, 1],
                                  [0, 0, 1]])
data['vectors'][1] = numpy.array([[1, 0, 1],
                                  [0, 1, 1],
                                  [1, 1, 1]])
# Right face
data['vectors'][2] = numpy.array([[1, 0, 0],
                                  [1, 0, 1],
                                  [1, 1, 0]])
data['vectors'][3] = numpy.array([[1, 1, 1],
                                  [1, 0, 1],
                                  [1, 1, 0]])
# Left face
data['vectors'][4] = numpy.array([[0, 0, 0],
                                  [1, 0, 0],
                                  [1, 0, 1]])
data['vectors'][5] = numpy.array([[0, 0, 0],
                                  [0, 0, 1],
                                  [1, 0, 1]])

# Since the cube faces are from 0 to 1 we can move it to the middle by
# substracting .5
data['vectors'] -= .5

# Generate 4 different meshes so we can rotate them later
meshes = [stl.mesh.Mesh(data.copy()) for _ in range(4)]

# Rotate 90 degrees over the Y axis
meshes[0].rotate([0.0, 0.5, 0.0], math.radians(90))

# Translate 2 points over the X axis
meshes[1].x += 2

# Rotate 90 degrees over the X axis
meshes[2].rotate([0.5, 0.0, 0.0], math.radians(90))
# Translate 2 points over the X and Y points
meshes[2].x += 2
meshes[2].y += 2

# Rotate 90 degrees over the X and Y axis
meshes[3].rotate([0.5, 0.0, 0.0], math.radians(90))
meshes[3].rotate([0.0, 0.5, 0.0], math.radians(90))
# Translate 2 points over the Y axis
meshes[3].y += 2


if False:
  # Optionally render the rotated cube faces
  from matplotlib import pyplot
  from mpl_toolkits import mplot3d

  # Create a new plot
  figure = pyplot.figure()
  axes = mplot3d.Axes3D(figure)

  # Render the cube faces
  for m in meshes:
      axes.add_collection3d(mplot3d.art3d.Poly3DCollection(m.vectors))

  # Auto scale to the mesh size
  scale = numpy.concatenate([m.points for m in meshes]).flatten(-1)
  axes.auto_scale_xyz(scale, scale, scale)

  # Show the plot to the screen
  pyplot.show()


combined = stl.mesh.Mesh(numpy.concatenate([
  meshes[0].data, meshes[1].data,
  meshes[2].data, meshes[3].data,
]))

combined.save('combined.stl', mode=stl.Mode.ASCII)  # save as ASCII
