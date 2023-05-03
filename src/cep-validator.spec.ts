import { CepValidator } from './cep-validator'
import { type Validator } from './cep-validator-protocol'

const makeSut = (): Validator => {
    const sut = CepValidator
    return sut
}

describe('Cep Validator', () => {
    test('should return false if an invalid cep is provided', () => {
        const sut = makeSut()
        expect(sut.validate('12345')).toBe(false)
    })

    test('should return false if an empty cep is provided', () => {
        const sut = makeSut()
        expect(sut.validate('')).toBe(false)
    })

    test('should return true if a valid cep is provided', () => {
        const sut = makeSut()
        expect(sut.validate('12345-678')).toBe(true)
    })
})
