"""
Line Intersection Module for Geometry Package

Things to do:
add unit tests
"""

class LineIntersection(object):
    """
    Class containing boolean testing methods for general
    line intersection in the plane.  Initiates with lines
    of form [(x1,y1), (x2,y2)] which are converted to
    labeled endpoints [(xi, yi), label].  The main test
    for general line intersection uses a sweep-line
    algorithm.
    """

    def __init__(self, lines):

        self.count      = 0
        self.lines      = {}
        self.sweeps     = []
        self.tested     = []
        self.add_lines(lines)


    def add_line(self, line):
        """
        Breaks line into endpoints, labels according to
        current self.count value, adds to dictionary and
        raises count by 1.
        """
        self.sweeps.append([line[0], str(self.count)])
        self.sweeps.append([line[1], str(self.count)])
        self.lines[str(self.count)] = line
        self.count += 1


    def add_lines(self, lines):
        for line in lines:
            self.add_line(line)


    def sort_sweeps(self):
        self.sweeps.sort(key = lambda x: (x[0][0], not x[1]))

    """ The following are boolean tests for line intersection. """

    def intersecting_two(self, lineA, lineB):
        """
        It suffices to check if two points are on opposite sides of
        a line segment.  To do this we compute the cross products of
        lineA and the endpoints of lineB and take their product. The
        product will be negative if and only if they intersect.
        """
        """ Endpoints of lineB will be labeled P and Q """
        P, Q = lineB[0], lineB[1]
        """ We now take the cross product of each endpoint with lineA """

        xproductP = (1.0*(lineA[1][0] - lineA[0][0])*(P[1] - lineA[1][1]) -
                     1.0*(lineA[1][1] - lineA[0][1])*(P[0] - lineA[1][0]))
        xproductQ = (1.0*(lineA[1][0] - lineA[0][0])*(Q[1] - lineA[1][1]) -
                     1.0*(lineA[1][1] - lineA[0][1])*(Q[0] - lineA[1][0]))

        return True if xproductP*xproductQ < 0 else False


    def general_intersection(self):
        """ The following is the implementation of a sweep-line algorithm """
        """
        Sorting the endpoints of each line(sweeps), we iterate through them
        from left to right, adding them to events as they come up.  If the
        other endpoint of the line comes up, both are removed.  If any endpoints
        of other lines come up while an endpoint is an event, these two lines
        need to be tested for intersection.
        """

        """ Empty case """
        if not self.sweeps:
            return False

        """ Sorting the sweeps, initializing events."""
        self.sort_sweeps()
        events = []

        """ Beginning sweep """
        i = 0
        while i < len(self.sweeps):
            """ Getting new endpoint's dictionary key """
            line_name = self.sweeps[i][1]
            if not events:
                events.append(line_name)
            elif line_name in events:
                events.remove(line_name)
                # New endpoint arrives while another is active:
            else:
                for event in events:
                    """ Grabs data for calculation from dictionary using keys """
                    test_results = self.intersecting_two(self.lines[event],
                                                     self.lines[line_name])
                    if test_results:
                        return True
            i += 1

        return False


    def __repr__(self):
        return 'Class for General Line Intersection in the plane'
