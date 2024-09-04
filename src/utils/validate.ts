/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path:string):Boolean {
	return /^(https?:|mailto:|tel:)/.test(path);
}
