<template>
    <section class="max-w-7xl mx-auto p-5">
      <section class="flex flex-col justify-center pt-20">

        <!-- photo -->
        <div class="w-full flex justify-center">
          <div class="w-56 h-56 rounded-full bg-gray-400 flex justify-center">
            <div class="w-52 h-52 rounded-full bg-gray-dark flex justify-center self-center">
              <img src="images/perfil.png" alt="" class="w-48 h-48 rounded-full grayscale self-center">
            </div>
          </div>
        </div>

        <!-- content -->
        <div class="max-w-5xl mx-auto">
          <h1 class="flex justify-center text-5xl p-5">
            {{ $t('about.title') }}
          </h1>
          <p>
            {{ $t('about.description') }}
          </p>
          <h3 class="text-2xl">
            Status
          </h3>
          <p>
            {{ $t('about.status') }}
          </p>
          <h3 class="text-2xl">
            Filosophy
          </h3>
          <p>

          </p>
        </div>

      </section>

    </section>
</template>