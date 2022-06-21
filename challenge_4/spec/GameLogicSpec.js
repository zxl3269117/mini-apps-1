describe('Detect win', function() {
  var detectHorizontalWin = gameLogic._detectHorizontalWin;
  var detectVerticalWin = gameLogic._detectVerticalWin;
  var detectDiagnalWin = gameLogic._detectDiagnalWin;
  var detectWin = gameLogic.detectWin;
  var detectTie = gameLogic.detectTie;

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

    it('should not detect a major diagnal win', function() {
      expect(detectDiagnalWin(emptyBoard)).to.equal(null);
    });

    it('should not detect a minor diagnal win', function() {
      expect(detectDiagnalWin(emptyBoard)).to.equal(null);
    });

    it('should not detect a tie', function() {
      expect(detectTie(emptyBoard)).to.equal(null);
    })

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

    it('should detect a win', function() {
      var redWin = [
        ['', '', '', '', '', '', 'black'],
        ['', '', '', '', '', 'black', 'red'],
        ['', '', '', '', 'red', 'red', 'red'],
        ['', '', '', 'red', 'black', 'red', 'black'],
        ['', '', 'red', 'red', 'red', 'black', 'black'],
        ['', 'red', 'black', 'red', 'black', 'black', 'black'],
      ];
      expect(detectWin(redWin)).to.equal('red');
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

    it('should detect a win', function() {
      var blackWin = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['red', 'black', 'red', '', '', '', ''],
        ['black', 'red', 'black', 'red', '', '', ''],
        ['black', 'black', 'black', 'black', 'red', 'red', ''],
      ];
      expect(detectWin(blackWin)).to.equal('black');
    });

  })
})