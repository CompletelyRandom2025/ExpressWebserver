response2="temp";
async function get(id, type)
{
	await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random").then(async Response => response2=Response);
    response2 = await response2.json();
    console.log(response2.text);
    const paragraph = document.createElement(type);
    paragraph.textContent = response2.text;
    const content = document.getElementById(id);
    content.appendChild(paragraph);
}
get('jscontent', 'h3');
get('jscontent2', 'h3');
get('jscontent3', 'h3');