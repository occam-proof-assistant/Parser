'use strict';

var termDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/term'),
    statementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/statement'),
    expressionDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/expression'),
    metastatementDefaultCustomGrammarBNF = require('./defaultCustomGrammarBNF/metastatement');

var defaultCustomGrammarBNFs = [termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF],
    defaultCustomGrammarBNF = defaultCustomGrammarBNFs.join('');

module.exports = defaultCustomGrammarBNF;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hckJORi5qcyJdLCJuYW1lcyI6WyJ0ZXJtRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJyZXF1aXJlIiwic3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hckJORnMiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSw4QkFBOEJDLFFBQVEsZ0NBQVIsQ0FBcEM7QUFBQSxJQUNNQyxtQ0FBbUNELFFBQVEscUNBQVIsQ0FEekM7QUFBQSxJQUVNRSxvQ0FBb0NGLFFBQVEsc0NBQVIsQ0FGMUM7QUFBQSxJQUdNRyx1Q0FBdUNILFFBQVEseUNBQVIsQ0FIN0M7O0FBS0EsSUFBTUksMkJBQTJCLENBQ3pCTCwyQkFEeUIsRUFFekJFLGdDQUZ5QixFQUd6QkMsaUNBSHlCLEVBSXpCQyxvQ0FKeUIsQ0FBakM7QUFBQSxJQU1NRSwwQkFBMEJELHlCQUF5QkUsSUFBekIsQ0FBOEIsRUFBOUIsQ0FOaEM7O0FBUUFDLE9BQU9DLE9BQVAsR0FBaUJILHVCQUFqQiIsImZpbGUiOiJkZWZhdWx0Q3VzdG9tR3JhbW1hckJORi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GID0gcmVxdWlyZSgnLi9kZWZhdWx0Q3VzdG9tR3JhbW1hckJORi90ZXJtJyksXG4gICAgICBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYvc3RhdGVtZW50JyksXG4gICAgICBleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyQk5GL2V4cHJlc3Npb24nKSxcbiAgICAgIG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiA9IHJlcXVpcmUoJy4vZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYvbWV0YXN0YXRlbWVudCcpO1xuXG5jb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORnMgPSBbXG4gICAgICAgIHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORixcbiAgICAgICAgc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYsXG4gICAgICAgIGV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORnMuam9pbignJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7XG4iXX0=