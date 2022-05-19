function main(){
    // console.log("hellooo?");
    const board = document.getElementById("easel");
    const ctx = board.getContext("2d");
    // console.log(ctx);

    board.setAttribute('width', '800');
    board.setAttribute('height', '800');

    ctx.width = board.width;
    ctx.height = board.height;

    let xx = 50;
    let yy = 50; 
    let width = 500;
    let height = 200; 

    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    // ctx.fillRect(50, 50, 500, 200);
    // ctx.strokeRect(50, 50, 500, 200);
    // ctx.fillRect(xx, yy, width, height);
    // ctx.strokeRect(xx, yy, width, height);

    function drawRectangle(ctx, x, y){
        let size = 50;
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 5;

        const myVariable = 'abc'

        // ctx.fillRect(x-(size/2), y-(size/2), size, size); // to place shape's center at the cursor's click point
        // ctx.strokeRect(x-(size/2), y-(size/2), size, size); // to place shape's center at the cursor's click point

        ctx.fillRect(x, y, size, size);
        ctx.strokeRect(x, y, size, size);

    };

    document.getElementById("clear").addEventListener("click", function(){ 
        clearCanvas(ctx);
        clearRects();
    });

    function clearCanvas(ctx){
        ctx.clearRect(0, 0, ctx.width, ctx.height);
    }

    board.addEventListener("click", function (event){
        addRectangle(event.offsetX, event.offsetY);
        drawRectangle(ctx, event.offsetX, event.offsetY);
        console.log(rectanglesArr);
    });

    
    board.addEventListener("mousemove", function(event){
        clearCanvas(ctx);
        drawAllRectangles(ctx, rectanglesArr)
        drawRectangle(ctx, event.offsetX, event.offsetY);
    });

    function addRectangle(x, y){
        const rect = new Rectangle(x, y);
        rectanglesArr.push(rect);
    }

    function drawAllRectangles(ctx, rects){
        rects.forEach(function (rect){
            drawRectangle(ctx, rect.x, rect.y);
        });
    }

    function clearRects (){
        rectanglesArr.length = 0;
    }
    class Rectangle {
        constructor(x, y){
            this.x = x; 
            this.y = y
        }
    };
    
    const rectanglesArr = [];

}

// if (document.readyState === 'loading'){
//     document.addEventListener("DOMContentLoaded", main);
// } else {
//     main();
// }

main();