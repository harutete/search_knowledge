export const state = () => ({
    wordList: []
})

export const mutations = {
    add (state: any, str: string) {
        state.wordList.push(str)
    }
}