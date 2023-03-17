export const SOLUTION_NAME = "ACE-QUICK-ACCESS";

const url = new URL(window.location.href);
const QUERY_STRING = new URLSearchParams(url.search);

console.log(window.location.href)

console.log((QUERY_STRING))

const debugSpecified = (QUERY_STRING.get("debug") === "true") ? true : false;

export const logger = {
    debug: (header: string, message: string | object) => {
        if(debugSpecified) {
            console.debug(SOLUTION_NAME, header, message);
        }
    }
}