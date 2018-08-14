var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set a valid todos array', () => {
			var todos = [
				{
					id: 1,
					text: 'test',
					completed: false
				}
			];
			TodoAPI.setTodos(todos);
			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});

		it('should not set an invalid todos array', () => {
			var invalidTodos = {a:'b'};
			TodoAPI.setTodos(invalidTodos);
			
			expect(localStorage.getItem('todos')).toBe(null);
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad localStorage data', () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('should return todo if valid array in localStorage', () => {
			var todos = [
				{
					id: 1,
					text: 'test',
					completed: false
				}
			];
			localStorage.setItem('todos', JSON.stringify(todos));
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);
		});
	});

	describe('filterTodos', () => {
		var todos = [{
		   id: 1,
		   text: 'Some text here',
		   completed: true
		},{
		   id: 2,
		   text: 'Other text here',
		   completed: false
		},{
		   id: 3,
		   text: 'Some text here',
		   completed: true
		}];

		it('should return all items if showCompleted is true', () => {
		   var filteredTodos = TodoAPI.filterTodos(todos, true, '');
		   expect(filteredTodos.length).toBe(3);
		});

		it('should return non-completed todos when showCompleted is false', () => {
		   var filteredTodos = TodoAPI.filterTodos(todos, false, '');
		   expect(filteredTodos.length).toBe(1);
		});
  	});
});