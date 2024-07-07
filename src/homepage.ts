const homepageHTML: string = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="An API for the Tarot de Marseille built with Bun.">
    <title>TarMarAPI</title>
    <style>
      main {
        margin: 5rem auto 2rem;
        border: 2px aliceblue dashed;
        width: fit-content;
        display: flex;
        flex-direction: column;
        padding: 3rem;
      }
      main a {
        color: white;
      }
      main a:hover {
        background-color: aliceblue;
        color: #221C35;
      }
      footer {
        background-color: darkslategray;
        width: fit-content;
        margin: auto;
        padding: 0.5rem;
        border-radius: 2px;
        border: 2px dotted;
      }
      footer a {
        text-decoration: none;
      }
    </style>
</head>
<main>
<h1>TarMarAPI</h1>
<p>This is the landing page to the API for the Tarot de Marseille.<p>
<p>You can find out more about it or just check the code on <a href="https://github.com/mickeymarse/tarmarapi" target="_blank">my repo</a>.</p>
</main>

<footer>Created with <a href="https://www.mickeymarse.dev/" target="_blank">🎴</a> and <a href="https://bun.sh/" target="_blank">🥟</a>.</footer>
`;

export default homepageHTML;
