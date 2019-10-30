describe('doriDancer', function() {

  var doriDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    doriDancer = new makeDoriDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(doriDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(doriDancer.$node, 'toggle');
    doriDancer.step();
    expect(doriDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(doriDancer, 'step');
      expect(doriDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(doriDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(doriDancer.step.callCount).to.be.equal(2);
    });
  });
});
