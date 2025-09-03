response2="temp";
async function get(id, type)
{
	response2 = await fetch("part1");
    response2 = await response2.text();
    console.log(response2);
    const paragraph = document.createElement(type);
    paragraph.textContent = response2;
    const content = document.getElementById(id);
    content.appendChild(paragraph);
}
get('jscontent', 'p');
get('jscontent2', 'p');
get('jscontent3', 'p');