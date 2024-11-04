<template>
    <div class="max-w-md mx-auto mt-40">
      <h1 class="text-3xl font-bold text-gray-900">Register</h1>
      <p class="mt-4 text-gray-600">Isi form di bawah untuk mendaftar.</p>
      <!-- Form pendaftaran -->
      <form class="mt-6 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" class="mt-1 block w-full px-3 py-2 border rounded-md" placeholder="Masukkan username" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" class="mt-1 block w-full px-3 py-2 border rounded-md" placeholder="Masukkan email" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" class="mt-1 block w-full px-3 py-2 border rounded-md" placeholder="Masukkan password" />
        </div>
        <div>
          <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Register
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
  };
  </script>
  
  <style scoped>
  /* Tambahkan style khusus untuk halaman register */
  </style>
  