import { CepValidator } from './cep-validator'

describe('Cep Validator', () => {
    test('should return false if an invalid cep is provided', () => {
        const sut = new CepValidator()
        expect(sut.validate('12345')).toBe(false)
    })

    test('should return false if an empty cep is provided', () => {
        const sut = new CepValidator()
        expect(sut.validate('')).toBe(false)
    })

    test('should return true if a valid cep is provided', () => {
        const sut = new CepValidator()
        expect(sut.validate('12345-678')).toBe(true)
    })
})
