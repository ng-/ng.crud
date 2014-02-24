module.exports = function()
{
	require('os')

	var tables = {user:[], org:[]}
	  , table

	function db(_table)
	{
		table = _table

		return db
	}

	db.create = function(values)
	{
		tables[table].push(values)

		return tables[table].length - 1
	}

	db.read = function(id)
	{
		return id ? tables[table][id] : tables[table]
	}

	db.update = function(values, id)
	{
		for (var i in values)
		{
			tables[table][id][i] = values[i]
		}

		return tables[table][id]
	}

	db.delete = function(id)
	{
		delete tables[table][id]
	}

	return db
}