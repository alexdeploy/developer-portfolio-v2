<template>
    <header id="navbar" class="w-full hidden md:flex flex-col">
      <nav class="w-full h-12 flex justify-between text-sm">

          <div class="flex">
            <NuxtLink id="nav-link" to="/" class="text-menu-text font-fira_retina px-6 h-full flex items-center">
              _hello
            </NuxtLink>
  
            <NuxtLink id="nav-link" to="/about-me" class="text-menu-text font-fira_retina px-6 h-full flex items-center">
              _about-me
            </NuxtLink>
  
            <NuxtLink id="nav-link" to="/projects" class="text-menu-text font-fira_retina px-6 h-full flex items-center">
              _projects
            </NuxtLink>
          </div>

          <NuxtLink id="nav-link-right" to="/" class="text-menu-text font-fira_retina px-6 h-full flex items-center justify-end">
            _contant-me
          </NuxtLink>
      
      </nav>

    </header>

</template>

<style>

/* Set bottom border 1px to navbar */
#navbar {
  border-bottom: 1px solid #1E2D3D;
}

#nav-link {
  border-right: 1px solid #1E2D3D;
}

#nav-link-right {
  border-left: 1px solid #1E2D3D;
}

#nav-link-right:hover {
  background-color: #1E2D3D;

}

#nav-link:hover {
  background-color: #1E2D3D;
}

#nav-link.active {
  border-bottom: 2px solid #FEA55F;
}
</style>

<script>

// Set active class to current page
export default {
  mounted() {
    // Change active class on link when click event is triggered
    document.querySelectorAll('#nav-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('#nav-link').forEach((link) => {
          link.classList.remove('active');
        });
        // Add active class to clicked link
        e.target.classList.add('active');
      });
    });
  }
}

</script>
