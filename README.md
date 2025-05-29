# Editing the site through Github Online:
- All content for the website is in the folder src/content, separated by tab
- Each tab has its own file, for example, the home tab content is under "home.ts"
- This is the only section of the code which needs to be edited to make content changes
- Code changes should automatically re-deploy, and can be seen on the site after waiting a few minutes. If changes are not seen after 5 minutes, an error has occurred.
- This method is only recommended for small or simple changes, such as making a typo correction, or changing outdated information, or removing or changing the orders of a section. For larger or complex edits, the edits must be done in a code editor to ensure that the syntax is correct and the website looks as expected. 

## How to make changes
1. Find the file that you want to edit through the navigator and click on it so that it appears in the center of the screen with its content displayed
2. Start by clicking the pencil button above the code to open the editor
3. Make changes according to the instructions below, depending on what you want to do
4. ENSURE THAT SYNTAX IS CORRECT. Go through the syntax checklist to ensure there are no errors. A syntax error will mean that no changes are made as the website will not be able to deploy.
5. Once you have made all the changes to a file, press the commit button. Write a message explaining what changes you have made and commit the chnages in github.
6. After the commit, Render will deploy the changes if all is correct, automatically.

## Syntax Checklist
1. The content of each variable must be surrounded by brackets. Do not delete starting or ending brackets
2. Any written content must be surrounded by quotations. The quotations must be of the same type, either "" or ''.
3. All lines must end in a comma
4. The information in a variable must match its type. This can be verified by looking at the files inside the types folder, inside the content folder. Search for the type of the constant you are entering, and ensure that every item in that type has been included in what you entered. 