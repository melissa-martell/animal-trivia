document.addEventListener('DOMContentLoaded', function() {
    // Multiple choise response
    document.querySelectorAll('.option').forEach(function(item){
        item.addEventListener('click', function(){
            item.style.backgroundColor = '#000';
            item.style.color = '#d9edff';
            item.classList.add('selected');
            
            // Volver al color por defecto los demas botones
            for (let i of document.querySelectorAll('.option'))
            {
                if (i != item) {
                    i.style.backgroundColor = '#d9edff';
                    i.style.color = '#000';
                    i.classList.remove('selected');
                }
            }
            });
        }
    );

    // Check correct answers
    document.getElementById('next-page').addEventListener('click', function(){
        // Check Part 1
        let selected_option = null;
        document.querySelectorAll('.option').forEach(function(item){
            // If no selected option
            if (!selected_option)
            {
                document.querySelector('#answer1').innerHTML = "Please, select an option";
            }

            // Check the selected answer
            if (item.classList.contains('selected'))
            {
                selected_option = item;
                if (item.classList.contains('correct_option'))
                {
                    item.style.backgroundColor = '#12ac1296';
                    document.querySelector('#answer1').innerHTML = "Correct!";
                    //Wait 1 second
                    setTimeout(function() {
                        window.location = 'animal1.html';
                    }, 1000);
                }
                else
                {
                    item.style.backgroundColor = '#ac12127d';
                    item.style.color = '#d9edff';
                    document.querySelector('#answer1').innerHTML = "Incorrect, try again";
                    
                }
            }

            //Reset selected options
            if (item.classList.contains('already-checked'))
            {
                item.style.backgroundColor = '#d9edff';
                item.style.color = '#000';
            }
 
            
        });

        // Check Part 2
        let valuePart2 = document.getElementById('input-part2');
        if (valuePart2)
        {
            if (valuePart2.value == false)
            {
                document.querySelector('#answer2').innerHTML = "Please, write an answer";
                document.querySelector('#input-part2').style.backgroundColor = '#fff';
            }
            else if (valuePart2.value.toLowerCase() == 'hummingbird')
            {
                document.querySelector('#answer2').innerHTML = "Correct!";
                document.querySelector('#input-part2').style.backgroundColor = '#12ac1296';
                setTimeout(function() {
                    window.location = 'animal2.html';
                }, 1000);
            }
            else
            {
                document.querySelector('#answer2').innerHTML = "Incorrect";
                document.querySelector('#input-part2').style.backgroundColor = '#ac12127d';
            }
        }
   

        // Check Part 3
        let correct = 0;
        document.querySelectorAll('.input3').forEach(function(item){
            if (item)
            {
                if (item.value == false)
                {
                    document.querySelector('#answer3').innerHTML = "Please, write all answers";
                    item.style.backgroundColor = '#fff';
                }
                else
                {
                    switch (item.id)
                    {
                        case 'input1-part3':
                            if (item.value.toLowerCase() == 'six' || item.value == '6')
                            {
                                item.style.backgroundColor = '#12ac1296';
                                correct++;
                            }
                            else
                            {
                                item.style.backgroundColor = '#ac12127d';
                            }
                            break;
                        case 'input2-part3':
                            if (item.value.toLowerCase() == 'twenty-five' || item.value.toLowerCase() == 'twenty five' || item.value == '25')
                            {
                                item.style.backgroundColor = '#12ac1296';
                                correct++;
                            }
                            else
                            {
                                item.style.backgroundColor = '#ac12127d';
                            }
                            break;
                        case 'input3-part3':
                            if (item.value.toLowerCase() == 'one' || item.value == '1')
                            {
                                item.style.backgroundColor = '#12ac1296';
                                correct++;
                            }
                            else
                            {
                                item.style.backgroundColor = '#ac12127d';
                            }
                            break;
                    }
                    
                }
            } 
        });
        finalText = document.getElementById('final-text');
        if (finalText)
        {
            if (correct == 3)
            { 
                finalText.style.color = '#12ac12c5';
                finalText.innerHTML = "YOU WIN!!! You have completed all three trivia questions, you are an expert on animals.";
            }
            else
            {
                finalText.innerHTML = "It looks like you have some answers wrong, try again";
                finalText.style.color = '#ac1212c2';
            }
        }
    });

    
});