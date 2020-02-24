window.dom = {};

window.dom.creat = function(string) {
  const container = document.createElement("template");
  container.innerHTML = string.trim();
  return container.content.firstChild;
};
window.dom.after = function(node, node2) {
  node.parentNode.insertBefore(node2, node.nextSilbling);
};
window.dom.bofore = function(node, node2) {
  node.parentNode.insertBefore(node2, node);
};
dom.append = function(parent, node) {
  parent.appendChild(node);
};
window.dom.wrap = function(node, parent) {
  dom.before(node, parent);
  dom.append(parent, node);
};
window.dom.remove = function(node) {
  node.parentNode.removeChild(node);
  return node;
};

window.dom.empty = function(node) {
  const array = [];
  let x = node.firstChild;
  while (x) {
    array.push(dom.remove(node.firstChild));
    x = node.firstChild;
  }
  return array;
};
window.dom.attr = function(node, name, value) {
  if (arguments.length === 3) {
    node.setAttritube(name, value);
  } else if (arguments === 2) {
    return node.getAttribute(name);
  }
};

window.dom.text = function(node, string) {
  if (arguments.length === 2) {
    if ("innerText" in node) {
      node.innerText = string;
    } else {
      node.textContent = string;
    }
  } else if (arguments.length === 1) {
    return node.innerText;
  }
};
window.dom.style = function(node,name,value){
    if(arguments.length === 3){
        // dom.style(div,'color','red')
        node.style.name = value
    }else if(arguments.length === 2){
        // dom.style(div,'color')
        if(typeof name === 'string'){
            return node.style[name]
        }else if(name instanceof Object){
            // dom.style(div,{color:'red'})
            for(let key in name){
                node.stlyle[key] = name[key]
            }
        }
    }
    
}

window.dom.class = {
    add(node,className){
        node.classList.add(className)
    },
    remove(node,className){
        node.classList.remove(className)
    },
    has(node,className){
        return node.classList.contains(className)
    }
}

window.dom.on = function(node,eventName,fn){
    node.addEventListener(eventName,fn)
}
window.dom.off = function(node,eventName,fn){
    node.removeEventListener(eventName,fn)
}

window.dom.find = function(selector,scope){
    return (scope || document).querySelectorAll(selector)
}   

window.dom.parent = function(node){
    return node.parentNode
}
window.dom.children = function(node){
    return node.children
}
window.dom.sibling = function(node){
    return Array.from(node.parentNode.children).filter(n => n!== node)
}
window.dom.next = function(node){
    let x = node.nextSbling
    while(x.nodeType === 3){
        x = x.nextSbling
    }
    return x
}
window.dom.previous = function(node){
    let x = node.previousSbling
    while(x.nodeType === 3){
        x = x.previousSbling
    }
    return x
}
window.dom.each = function(nodeList,fn){
    for(let i= 0;i <= nodeList.length;i++){
        fn.call(null,nodeList[i])
    }
}
window.dom.index = function(node){
    const list = window.dom.children(node.parentNode)
    let i = 0;
    for( i = 0;i<list.length;i++){
        if(list[i] === node){
            break
        }
    }
    return i
}