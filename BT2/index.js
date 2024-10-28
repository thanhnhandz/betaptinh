const inputA = document.querySelector('.element:nth-child(1) input');
const inputB = document.querySelector('.element:nth-child(2) input');
const resultDiv = document.querySelector('.result');
const operations = document.querySelectorAll('.operation');
const calculateButton = document.querySelector('.calculate');

let selectedOperation = null;

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        operations.forEach(op => op.classList.remove('active'));
        operation.classList.add('active');
        selectedOperation = operation.id;
    });
});

calculateButton.addEventListener('click', () => {
    // Lấy giá trị từ các ô input và chuyển đổi sang số
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);

    // Kiểm tra nếu các ô input trống hoặc không phải là số
    if (isNaN(a) || isNaN(b)) {
        resultDiv.innerText = "Vui lòng nhập số hợp lệ vào cả A và B.";
        return;
    }

    // Kiểm tra nếu chưa chọn phép toán
    if (!selectedOperation) {
        resultDiv.innerText = "Vui lòng chọn phép tính.";
        return;
    }

    // Thực hiện phép toán dựa trên operation đã chọn
    let result;
    switch (selectedOperation) {
        case 'addition':
            result = a + b;
            break;
        case 'substraction':
            result = a - b;
            break;
        case 'multiplication':
            result = a * b;
            break;
        case 'division':
            // Kiểm tra chia cho 0
            if (b === 0) {
                resultDiv.innerText = "Không thể chia cho 0.";
                return;
            }
            result = a / b;
            break;
        default:
            result = "Phép toán không hợp lệ.";
    }

    // Hiển thị kết quả vào div .result
    resultDiv.innerText = `${result}`;
});