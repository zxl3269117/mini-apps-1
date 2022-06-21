describe('Detect win', function() {
  var detectHorizontalWin = gameLogic.detectHorizontalWin;

  describe('Empty board', function() {
    var emptyBoard = [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ];

    it('should not detect horizontal win', function() {
      expect(detectHorizontalWin(emptyBoard)).to.equal(null);
    });

    it('should not detect vertical win', function() {
      expect(detectVerticalWin(emptyBoard)).to.equal(null);
    });

    it('should detect not a major diagnal win', function() {
      expect(detectDiagnalWin(diagnalWin)).to.equal(null);
    });

    it('should detect not a minor diagnal win', function() {
      expect(detectDiagnalWin(diagnalWin)).to.equal(null);
    });

  })

  describe('Red winning', function() {
    var horizontalWin = [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['red', 'black', 'red', 'red', 'red', 'red'],
    ];

    it('should detect a horizontal win', function() {
      expect(detectHorizontalWin(horizontalWin)).to.equal('red');
    });

    var verticalWin = [
      ['red', '', '', '', '', ''],
      ['red', '', '', '', '', ''],
      ['red', '', '', '', '', ''],
      ['red', '', '', '', '', ''],
      ['black', '', '', '', '', ''],
      ['black', '', '', '', '', ''],
      ['red', '', '', '', '', ''],
    ];

    it('should detect a vertical win', function() {
      expect(detectVerticalWin(verticalWin)).to.equal('red');
    });

    var diagnalWin = [
      ['red', '', '', '', '', ''],
      ['', 'red', '', '', '', ''],
      ['', '', 'red', '', '', ''],
      ['', '', '', 'red', '', ''],
      ['', '', '', '', '', 'black'],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ];

    it('should detect a major diagnal win', function() {
      expect(detectDiagnalWin(diagnalWin)).to.equal('red');
    });

    it('should detect a minor diagnal win', function() {
      expect(detectDiagnalWin(diagnalWin)).to.equal('red');
    });

  })

  describe('Black winning', function() {
    var horizontalWin = [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['black', 'black', 'black', 'black', 'red', 'red'],
    ];

    it('should detect a horizontal win', function(){
      expect(detectHorizontalWin(horizontalWin)).to.equal('black');
    })

    var verticalWin = [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', 'red'],
      ['', '', '', '', '', 'black'],
      ['', '', '', '', '', 'black'],
      ['', '', '', '', '', 'black'],
      ['', '', '', '', '', 'black'],
    ];

    it('should detect a vertical win', function() {
      expect(detectVerticalWin(verticalWin)).to.equal('black');
    });

    var diagnalWin = [
      ['', '', '', '', '', 'black'],
      ['', '', '', '', 'black', ''],
      ['', '', '', 'black', '', ''],
      ['', '', 'black', '', '', ''],
      ['', 'red', '', '', '', ''],
      ['red', '', '', '', '', ''],
      ['', '', '', '', '', ''],
    ];

    it('should detect a major diagnal win', function() {
      expect(detectDiagnalWin(diagnalWin)).to.equal('black');
    });

    it('should detect a minor diagnal win', function() {
      expect(detectDiagnalWin(diagnalWin)).to.equal('black');
    });

  })
})