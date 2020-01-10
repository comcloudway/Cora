/* 
Import using script tags
*/

const require = async (module) => {
    return await import(module+".js")
} 