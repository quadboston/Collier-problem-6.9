class ChristoffelSymbol {
	values = [
		[[0, 0], [0, 0]],
		[[0, 0], [0, 0]],
	];
	constructor(upper, lower1, lower2) {
		this.upper = upper;
		this.lower1 = lower1;
		this.lower2 = lower2;
	}

	toString() {
	    return '<math xmlns>' +
	      '<mmultiscripts>' +
	        '<mi>Γ</mi>' +
			'<mi>' + indexToCoordinate(this.lower1) + '</mi>' +
			'<mi>' + indexToCoordinate(this.upper) + '</mi>' +
	        '<mi>' + indexToCoordinate(this.lower2) + '</mi>' +
			'<none/>' +
	      '</mmultiscripts>' +
	    '</math>';
	  }

	evaluate() {
	    // This function would contain the logic to evaluate the Christoffel symbol.
	    // For now, it just returns a placeholder value.
	    	return values[this.upper][this.lower1][this.lower2];
	  	}
}
