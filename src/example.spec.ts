import { Example } from './example'

describe('Example', () => {
    test('Handle should return true', () => {
        const sut = new Example()
        expect(sut.handle()).toBe(true)
    })
})
