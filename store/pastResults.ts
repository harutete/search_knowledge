export const state = () => ({
    results: []
})

export const mutations = {
    add (state: any, str: string, arr: any) {
        state.results.push({
            text: str,
            data: arr
        })
    }
}