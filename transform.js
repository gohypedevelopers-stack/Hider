module.exports = function(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Remove imports
  let hasChanges = false;
  root.find(j.ImportDeclaration, {
    source: { value: 'framer-motion' }
  }).forEach(p => {
    hasChanges = true;
    j(p).remove();
  });

  // Handle <motion.div> -> <div>
  root.find(j.JSXElement).forEach(path => {
    const openingElement = path.node.openingElement;
    const closingElement = path.node.closingElement;

    if (openingElement.name.type === 'JSXMemberExpression' &&
        openingElement.name.object.name === 'motion') {
      
      hasChanges = true;  
      const htmlTag = openingElement.name.property.name;

      openingElement.name = j.jsxIdentifier(htmlTag);
      if (closingElement) {
        closingElement.name = j.jsxIdentifier(htmlTag);
      }

      const motionAttrs = ['initial', 'animate', 'whileInView', 'transition', 'viewport', 'variants', 'whileHover', 'whileTap', 'exit', 'layoutId', 'layout', 'style'];
      
      openingElement.attributes = openingElement.attributes.filter(attr => {
        if (attr.type === 'JSXAttribute' && attr.name && attr.name.name) {
          // Keep style if it doesn't contain useTransform or motion values, but it's safer to remove style attr entirely if we suspect it contains framer-motion values like style={{ y: yParallax }}. So I'm removing 'style' for safety. Or at least be aware of it.
          if (attr.name.name === 'style') {
            const value = attr.value;
            // if style handles something that looks like motion, strip it
            return false;
          }
          return !motionAttrs.includes(attr.name.name);
        }
        return true;
      });
    }
    
    // Replace <AnimatePresence> with <div>
    if (openingElement.name.type === 'JSXIdentifier' && openingElement.name.name === 'AnimatePresence') {
      hasChanges = true;
      openingElement.name.name = 'div';
      if (closingElement) {
         closingElement.name.name = 'div';
      }
    }
  });

  return hasChanges ? root.toSource() : null;
};
