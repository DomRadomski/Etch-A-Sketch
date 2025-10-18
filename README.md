Project Steps

1. Set Up Your Project

        Create a new GitHub repository for your project.

        Clone the repository to your local machine.

        Set up your basic file structure:

        index.html

        style.css

        script.js

        Link your CSS and JavaScript files in your HTML.

2. Create the Grid

        In your HTML, create a container <div> to hold the grid.

        In your JavaScript file:

        Write a function to generate a 16x16 grid of square <div> elements inside the container.

        Use loops to create the squares dynamically (do not add them manually in HTML).

        Use Flexbox in your CSS to display the squares as a grid layout.

        Ensure all squares fit evenly inside the container (watch for borders and margins).

3. Add Hover Effect

        Add an event listener to each square to detect when the mouse hovers over it.

        Change the square’s color when hovered (using either a new class or by directly changing the background color in JavaScript).

4. Add Grid Resize Button

        Create a button at the top of the page labeled “New Grid”.

        When clicked:

        Prompt the user to enter a new number of squares per side (max 100).

        Remove the existing grid.

        Generate a new grid based on the user’s input, maintaining the same total container size (e.g., 960px wide).

5. Test and Debug

        Use browser developer tools to check for:

        Linked files (CSS, JS)

        Console errors

        Properly generated elements in the DOM

        Use console.log statements to test your code where needed.

6. Push to GitHub

        Commit your changes frequently with clear commit messages.

        Push your final project to your GitHub repository.

7. Extra Credit (Optional)

        Random Color Mode:

        When a square is hovered, assign it a random RGB color.

        Progressive Darkening:

        Each time a square is hovered, darken it by 10% until it becomes completely black.

        You can use the CSS opacity property to achieve this effect.

        Would you like me to format it with Markdown code blocks, emojis, or styled headings (like a GitHub-ready aesthetic)?