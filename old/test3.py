from __future__ import print_function

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
