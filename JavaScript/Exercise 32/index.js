let fruits=prompt("Enter top 5 favourite fruits separated by comma");
fruits=fruits.split(",");
[top1,top2,top3]=fruits;
[,,,...top45]=fruits;
alert(`Your top 3 fruits: ${top1}, ${top2}, ${top3}`);
alert(`Rest fruits: ${top45}`);