from __future__ import print_function
import struct

header = 'STLB ATF 2.0.0.9000 COLOR=\xa0\xa0\xa0\xff                                                  '

# triangles = [
#   ( (0.0, 0.0, 0.0), (1.0, 0.0, 0.0), (1.0, 1.0, 0.0) ),
# ]


with open('noah1.stl', 'rb') as fp:
  header = fp.read(80)
  (count, ) = struct.unpack('<I', fp.read(4))
  print( 'count', count )
  for i in range(count):
    (nx, ny, nz) = struct.unpack('<fff', fp.read(3*4))
    (ax, ay, az) = struct.unpack('<fff', fp.read(3*4))
    (bx, by, bz) = struct.unpack('<fff', fp.read(3*4))
    (cx, cy, cz) = struct.unpack('<fff', fp.read(3*4))
    (attributes, ) = struct.unpack('<H', fp.read(2)) # 20083 ?
    print( 'attributes', attributes )
  print( 'xx', fp.tell() )



from OpenGLContext import testingcontext
BaseContext = testingcontext.getInteractive()

from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GL import shaders
from OpenGLContext.arrays import *
from OpenGL.arrays import vbo



class TestContext( BaseContext ):
  def OnInit(self):
    VERTEX_SHADER = shaders.compileShader("""#version 120
    void main() {
        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
    }""", GL_VERTEX_SHADER)
    FRAGMENT_SHADER = shaders.compileShader("""#version 120
    void main() {
        gl_FragColor = vec4( 0, 1, 0, 1 );
    }""", GL_FRAGMENT_SHADER)
    self.shader = shaders.compileProgram(VERTEX_SHADER,FRAGMENT_SHADER)
    self.vbo = vbo.VBO(
      array( [
        [  0, 1, 0 ],
        [ -1,-1, 0 ],
        [  1,-1, 0 ],
        [  2,-1, 0 ],
        [  4,-1, 0 ],
        [  4, 1, 0 ],
        [  2,-1, 0 ],
        [  4, 1, 0 ],
        [  2, 1, 0 ],
      ],'f')
    )

  def Render(self, mode):
    try:
      shaders.glUseProgram(self.shader)
      self.vbo.bind()
      glEnableClientState(GL_VERTEX_ARRAY);
      glVertexPointerf( self.vbo )
      glDrawArrays(GL_TRIANGLES, 0, 9)
    finally:
      self.vbo.unbind()
      glDisableClientState(GL_VERTEX_ARRAY);
      shaders.glUseProgram( 0 )

if __name__ == "__main__":
  TestContext.ContextMainLoop()
