REPORTER = list
MOCHA_OPTS = --ui tdd --ignore-leaks

seed:
	clear
	echo Seeding *********************************************************
	node seed.js
	echo Ending seed!