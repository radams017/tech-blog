const title = document.querySelector('#project-name').value.trim()
const body = document.querySelector('#project-desc').value.trim()


const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blog/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to update project');
        }
    }
};

console.log(JSON.stringify({
    title,
    body
}))

document.querySelector('#blogSubmit').addEventListener('click', updateButtonHandler)