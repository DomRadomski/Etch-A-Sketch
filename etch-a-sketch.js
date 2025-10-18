const container = document.getElementById("container");

function createDivs(num) 
{

    for (let x = 0; x < num; x++)
    {
        const parent = document.createElement("div");
        parent.classList.add("parent");

        for (let y = 0; y < num; y++)
        {
            const child = document.createElement("div");
            child.classList.add("child");

            parent.appendChild(child);
        }

        container.appendChild(parent);  

    }
}

createDivs(6);