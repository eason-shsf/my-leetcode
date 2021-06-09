var reverseList = function(head) {
    if(!head || !head.next) {
        return head
    }
    let oldHead = head, curHead = head.next
    oldHead.next = null
    if(!curHead.next) {
        curHead.next = oldHead
        return curHead
    }
    let nextHead = curHead.next
    while(nextHead) {
        let cacheNextHead = nextHead.next
        curHead.next = oldHead
        oldHead = curHead
        curHead = nextHead
        nextHead = cacheNextHead
    }
    curHead.next = oldHead
    return curHead
};