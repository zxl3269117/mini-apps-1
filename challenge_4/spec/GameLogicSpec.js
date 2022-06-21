describe('Detect win', function() {
  var detectHorizontalWin = gameLogic.detectHorizontalWin;
  var detectVerticalWin = gameLogic.detectVerticalWin;
  var detectDiagnalWin = gameLogic.detectDiagnalWin;

  describe('Empty board', function() {
    var emptyBoard = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '']
    ];

    it('should not detect horizontal win', function() {
      expect(detectHorizontalWin(emptyBoard)).to.equal(null);
    });

    it('should not detect vertical win', function() {
      expect(detectVerticalWin(emptyBoard)).to.equal(null);
    });

    it('should detect not a major diagnal win', function() {
      expect(detectDiagnalWin(emptyBoard)).to.equal(null);
    });

    it('should detect not a minor diagnal win', function() {
      expect(detectDiagnalWin(emptyBoard)).to.equal(null);
    });

  })

  describe('Red winning', function() {
    it('should detect a horizontal win', function() {
      var horizontalWin = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['black', 'red', 'black', 'red', 'red', 'red', 'red'],
      ];
      expect(detectHorizontalWin(horizontalWin)).to.equal('red');
    });

    it('should detect a vertical win', function() {
      var verticalWin = [
        ['red', '', '', '', '', '', ''],
        ['red', '', '', '', '', '', ''],
        ['red', '', '', '', '', '', ''],
        ['red', '', '', '', '', '', ''],
        ['black', '', '', '', '', '', ''],
        ['black', '', '', '', '', '', '']
      ];

      expect(detectVerticalWin(verticalWin)).to.equal('red');
    });


    it('should detect a major diagnal win', function() {
      var diagnalWin = [
        ['red', '', '', '', '', '', ''],
        ['', 'red', '', '', '', '', ''],
        ['', '', 'red', '', '', '', ''],
        ['', '', '', 'red', '', '', ''],
        ['', '', '', '', 'black', '', ''],
        ['', '', '', '', '', '', ''],
      ];

      expect(detectDiagnalWin(diagnalWin)).to.equal('red');
    });

    it('should detect a minor diagnal win', function() {
      var diagnalWin = [
        ['', '', '', '', '', '', 'black'],
        ['', '', '', '', '', 'black', ''],
        ['', '', '', '', 'red', '', ''],
        ['', '', '', 'red', '', '', ''],
        ['', '', 'red', '', '', '', ''],
        ['', 'red', '', '', '', '', ''],
      ];
      expect(detectDiagnalWin(diagnalWin)).to.equal('red');
    });

  })

  describe('Black winning', function() {

    it('should detect a horizontal win', function(){
      var horizontalWin = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['black', 'black', 'black', 'black', 'red', 'red', ''],
      ];
      expect(detectHorizontalWin(horizontalWin)).to.equal('black');
    })


    it('should detect a vertical win', function() {
      var verticalWin = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', 'red'],
        ['', '', '', '', '', '', 'black'],
        ['', '', '', '', '', '', 'black'],
        ['', '', '', '', '', '', 'black'],
        ['', '', '', '', '', '', 'black'],
      ];
      expect(detectVerticalWin(verticalWin)).to.equal('black');
    });


    it('should detect a major diagnal win', function() {
      var diagnalWin = [
        ['', 'red', '', '', '', '', ''],
        ['', '', 'red', '', '', '', ''],
        ['', '', '', 'black', '', '', ''],
        ['', '', '', '', 'black', '', ''],
        ['', '', '', '', '', 'black', ''],
        ['', '', '', '', '', '', 'black'],
      ];
      expect(detectDiagnalWin(diagnalWin)).to.equal('black');
    });

    it('should detect a minor diagnal win', function() {
      var diagnalWin = [
        ['', '', '', '', '', '', 'black'],
        ['', '', '', '', '', 'black', ''],
        ['', '', '', '', 'black', '', ''],
        ['', '', '', 'black', '', '', ''],
        ['', '', 'red', '', '', '', ''],
        ['', 'red', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
      ];
      expect(detectDiagnalWin(diagnalWin)).to.equal('black');
    });

  })
})