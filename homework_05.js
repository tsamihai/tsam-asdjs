function calcoli(string) {
		switch (string) {
			case '+':
				return (a,b) => a+b;
				break;
			case '-':
				return (a,b) => b-a;
				break;
			case '*':
				return (a,b) => a*b;
				break;
			case '/':
				return (a,b) => b/a;
				break;
		}
}