function generateNumbers() {
           
            let num1 = Math.ceil(Math.random() * 20); 
            let num2 = Math.ceil(Math.random() * 20);
            let num3 = Math.ceil(Math.random() * 20);

            
            let largest = Math.max(num1, num2, num3);

            
            let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let letter = alphabet[num1 - 1];  

            
            let totalMinutes = num2 * num3;
            let hours = Math.floor(totalMinutes / 60);
            let minutes = totalMinutes % 60;

            //Genshin Raiden family mog battle
           
            let story = `
                <p> AVERAGE SCORE OUT OF 20: <p>
               <p> Raiden Ei: <strong>${num1}</strong>, Yae Miko: <strong>${num2}</strong>, Raiden Kabukimono: <strong>${num3}</strong>.</p>
                <p>The largest Score is <strong>${largest}</strong>.</p>
                <P> The current #1 Raiden fan starts with letter: <strong>${letter}</strong>.</p>
                <p>The total time of manually gathering results is  <strong>${totalMinutes} minutes</strong> : <strong>${hours} hours and ${minutes} minutes</strong>.</p>
            `;

            
            document.getElementById('output').innerHTML = story;
        }
