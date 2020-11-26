/*************************************
	■ STATE
	・状態を保菅
**************************************/
export const state = () => ({
	count: 0
})


/*************************************
	■ GETTERS
	・状態を取得・表示の際に使用
**************************************/
export const getters = {
	countGetters(state) {
		return state.count
	}
}


/*************************************
	■ MUTATIONS
	・ミューテーションを通してのみ状態変更可
**************************************/
export const mutations = {
	incrementMutations(state, payload) {
		state.count += payload
	},
	decrementMutations(state, payload) {
		state.count -= payload
	}
}


/*************************************
	■ ACTIONS
	・ミューテーション呼び出し（Actionsでは状態変更不可）
	・非同期処理を含むことが出来る
**************************************/
export const actions = {
	incrementActions(context, payload) {
		setTimeout(() => {
			context.commit('incrementMutations', payload)
		}, 500)
	},
	decrementActions(context, payload) {
		setTimeout(() => {
			context.commit('decrementMutations', payload)
		}, 500)
	}
}
