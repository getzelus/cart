export default function formatCurrent(num) {
    return '$' +  Number(num.toFixed(1)).toLocaleString();
}