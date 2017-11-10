const ADDGUN = '加'
const REMOVEGUN = '减' 
// reducer
export function counter (state=0, action){
	switch(action.type){
		case ADDGUN:
		    return state+1
		case REMOVEGUN:
			return state-1
		default:return 10
	}
}

// action create
export function add_GUN(){
    return {type:ADDGUN}
    
}
export function remove_GUN(){
    return {type:REMOVEGUN}
}
export function add_GUNAsync(){
	return dispatchs=>{
		setTimeout(()=>{dispatchs(add_GUN())},2000)
	}
}