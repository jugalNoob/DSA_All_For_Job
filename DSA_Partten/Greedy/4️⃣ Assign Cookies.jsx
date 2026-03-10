4️⃣ Assign Cookies

Problem:
Give cookies to children so maximum children are satisfied.

Code
function findContentChildren(g,s){

    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)

    let i=0
    let j=0

    while(i<g.length && j<s.length){

        if(s[j] >= g[i]){
            i++
        }

        j++
    }

    return i
}
