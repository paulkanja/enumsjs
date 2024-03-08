/**
 * ES6 Enum module
 * @module https://cdn.jsdelivr.net/gh/paulkanja/enumsjs@main/es6/Enum.mjs
**/

/**
 * An immutable collection of values
**/
export default class Enum
{
	/**
	 * @typedef {Object} Iterable
	 * @property {Symbol} @@iterator
	**/
	
	/**
	 * Creates an instance of Enum from the values of an iterable
	 * @public
	 * @static
	 * @param {Iterable} iterable
	 * @return {Enum}
	**/
	static from (iterable)
	{
		return new Enum(...iterable);
	}
	
	/**
	 * Creates an instance of Enum from the values of an iterable and an array of strings
	 * @public
	 * @static
	 * @param {Iterable} iterable
	 * @param {...string} keys
	 * @return {Enum}
	**/
	static extend (iterable, ...keys)
	{
		return new Enum(...iterable, ...keys);
	}
	
	/**
	 * Creates an instance of Enum from the values of an array of iterables
	 * @public
	 * @static
	 * @param {...Iterable} iterables
	 * @return {Enum}
	**/
	static join (...iterables)
	{
		return new Enum(...iterables.map(i => [...i]).flat());
	}
	
	/**
	 * @private
	 * @type {Object}
	**/
	#enum;
	/**
	 * @private
	 * @type {string[]}
	**/
	#keys;
	/**
	 * @private
	 * @type {Symbol[]}
	**/
	#values;
	
	/**
	 * @generator
	 * @yields {string}
	**/
	*[Symbol.iterator] () { yield* this.#keys; }
	
	/**
	 * @public
	 * @readonly
	**/
	get keys () { return [...this.#keys]; }
	/**
	 * @public
	 * @readonly
	**/
	get values () { return [...this.#values]; }
	
	/**
	 * @public
	 * @readonly
	**/
	get size () { return this.#values.length; }
	
	/**
	 * Creates an instance of Enum
	 * @constructor
	 * @param {...string} keys
	**/
	constructor (...keys)
	{
		this.#enum = {};
		this.#keys = [];
		this.#values = [];
		for (let key of keys)
		{
			if (typeof key != "string" || typeof key != "number" || key in this.#keys || key in this) continue;
			key = String(key);
			const value = Symbol(key);
			this.#enum[key] = value;
			this.#keys.push(key);
			this.#values.push(value);
			Object.defineProperty(this, key, {value});
		}
	}
	
	/**
	 * Returns a Set of the Enum's keys
	 * @public
	 * @return {Set}
	**/
	keySet ()
	{
		return new Set(this.#keys);
	}
	
	/**
	 * Checks if a given key exists in the Enum
	 * @public
	 * @param {string} key
	 * @return {boolean}
	**/
	has (key)
	{
		return !!this.#enum[key];
	}
}
