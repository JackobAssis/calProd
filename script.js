function calcularPrecoVenda() {
    const custoInput = document.getElementById('custo');
    const markupInput = document.getElementById('markup');
    const resultadoDiv = document.getElementById('resultado');

    const custo = parseFloat(custoInput.value);
    const markup = parseFloat(markupInput.value);

    if (isNaN(custo) || isNaN(markup)) {
        resultadoDiv.innerText = 'Por favor, insira números válidos.';
        return;
    }

    const materias = document.querySelectorAll('.materia');
    let precoTotalMaterias = 0;

    materias.forEach(materia => {
        const quantidadeInput = materia.querySelector('input[type="number"]');
        const custoInput = materia.querySelector('input[type="number"][id^="custo"]');
        const resultadoDiv = materia.querySelector('div[id^="resultado"]');

        const quantidade = parseFloat(quantidadeInput.value);
        const custoUnidade = parseFloat(custoInput.value);

        if (!isNaN(quantidade) && !isNaN(custoUnidade)) {
            const precoMateria = quantidade * custoUnidade;
            resultadoDiv.innerText = `Custo da matéria: R$ ${precoMateria.toFixed(2)}`;
            precoTotalMaterias += precoMateria;
        } else {
            resultadoDiv.innerText = 'Por favor, insira números válidos.';
        }
    });

    const precoVenda = custo + (markup / 100 * custo);
    const lucroTotal = precoVenda - (custo + precoTotalMaterias);
    resultadoDiv.innerText = `Preço de venda: R$ ${precoVenda.toFixed(2)} (Lucro total: R$ ${lucroTotal.toFixed(2)})`;
}