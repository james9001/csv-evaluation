# Instructions

Although this project's code isn't doing any validation up front, that could be implemented to fail early. Since none of the data is being evaluated, only parsed, any incorrect or untrusted input would at most throw an error. Very large numbers could possibly cause problems, but that is true of any large data passed into computer systems.

Changing over from a CSV to a TSV file would require changing only 3 arguments in the index.ts file, which is simple enough to do. It would also be possible to have the split character come from dotenv config or somesuch, although I ran out of time to do so.

To run the code, do the following:
- Ensure you have Node (and NPM) installed on your machine (tested with Node LTS version 18)
- Clone the repository, navigate to it
- Run `npm install`
- Run `npm run build`
- Ensure you have the `input.csv` in the CWD of the project
- Run `node dist/index.js`
