export class CepValidator {
    /**
     * Validates a cep.
     * @param {string} cep
     * @returns {boolean}
    */
    validate(cep: string): boolean {
        const cepRegex = /^[0-9]{5}-[0-9]{3}$/
        return cepRegex.test(cep)
    }
}
