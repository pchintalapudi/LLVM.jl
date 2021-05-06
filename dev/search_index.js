var documenterSearchIndex = {"docs":
[{"location":"lib/interop/#Julia/LLVM-interop-1","page":"Julia/LLVM interop","title":"Julia/LLVM interop","text":"","category":"section"},{"location":"lib/interop/#","page":"Julia/LLVM interop","title":"Julia/LLVM interop","text":"This section lists functionality for connecting Julia with LLVM.jl, e.g. emitting code for the Julia JIT or creating types that are compatible with Julia's global state.","category":"page"},{"location":"lib/interop/#Base-functionality-1","page":"Julia/LLVM interop","title":"Base functionality","text":"","category":"section"},{"location":"lib/interop/#","page":"Julia/LLVM interop","title":"Julia/LLVM interop","text":"LLVM.Interop.JuliaContext\nBase.convert(::Type{LLVMType}, ::Type)\nLLVM.Interop.create_function\nLLVM.Interop.call_function","category":"page"},{"location":"lib/interop/#LLVM.Interop.JuliaContext","page":"Julia/LLVM interop","title":"LLVM.Interop.JuliaContext","text":"JuliaContext()\nJuliaContext(f::Function)\n\nReturns the (session-bound) LLVM context used by the Julia compiler. This only works on Julia 1.5 or below; starting with Julia 1.6 there is no global context. On those versions, you need to use the do-block version of this function to create a temporary context, and pipe it through instead of assuming and accessing a single global contex. The do-block version also works on 1.5 and below, where it just returns the global context.\n\n\n\n\n\n","category":"function"},{"location":"lib/interop/#Base.convert-Tuple{Type{LLVMType},Type}","page":"Julia/LLVM interop","title":"Base.convert","text":"convert(LLVMType, typ::Type, ctx::Context; allow_boxed=true)\n\nConvert a Julia type typ to its LLVM representation. Fails if the type would be boxed.\n\n\n\n\n\n","category":"method"},{"location":"lib/interop/#LLVM.Interop.create_function","page":"Julia/LLVM interop","title":"LLVM.Interop.create_function","text":"create_function(rettyp::LLVMType, argtyp::Vector{LLVMType}, [name::String])\n\nCreate an LLVM function, given its return type rettyp and a vector of argument types argtyp. The function is marked for inlining, to be embedded in the caller's body. Returns both the newly created function, and its type.\n\n\n\n\n\n","category":"function"},{"location":"lib/interop/#LLVM.Interop.call_function","page":"Julia/LLVM interop","title":"LLVM.Interop.call_function","text":"call_function(f::LLVM.Function, rettyp::Type, argtyp::Type, args::Expr)\n\nGenerate a call to an LLVM function f, given its return type rettyp and a tuple-type for the arguments. The arguments should be passed as a tuple expression containing the argument values (eg. :((1,2))), which will be splatted into the call to the function.\n\n\n\n\n\n","category":"function"},{"location":"lib/interop/#Inline-assembly-1","page":"Julia/LLVM interop","title":"Inline assembly","text":"","category":"section"},{"location":"lib/interop/#","page":"Julia/LLVM interop","title":"Julia/LLVM interop","text":"LLVM.Interop.@asmcall","category":"page"},{"location":"lib/interop/#LLVM.Interop.@asmcall","page":"Julia/LLVM interop","title":"LLVM.Interop.@asmcall","text":"@asmcall asm::String [constraints::String] [side_effects::Bool=false]\n         rettyp=Nothing argtyp=Tuple{} args...\n\nCall some inline assembly asm, optionally constrained by constraints and denoting other side effects in side_effects, specifying the return type in rettyp and types of arguments as a tuple-type in argtyp.\n\n\n\n\n\n","category":"macro"},{"location":"lib/api/#API-wrappers-1","page":"API wrappers","title":"API wrappers","text":"","category":"section"},{"location":"lib/api/#","page":"API wrappers","title":"API wrappers","text":"This section lists the package's public functionality that directly corresponds to functionality of the LLVM C API. In general, the abstractions stay close to those of the LLVM APIs, so for more information on certain library calls you can consult the LLVM C API reference.","category":"page"},{"location":"lib/api/#","page":"API wrappers","title":"API wrappers","text":"The documentation is grouped according to the modules of the driver API.","category":"page"},{"location":"lib/api/#","page":"API wrappers","title":"API wrappers","text":"WIP","category":"page"},{"location":"man/usage/#Usage-1","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"man/usage/#","page":"Usage","title":"Usage","text":"To enable debug logging, launch Julia with the JULIA_DEBUG environment variable set to LLVM.","category":"page"},{"location":"man/usage/#","page":"Usage","title":"Usage","text":"WIP","category":"page"},{"location":"#LLVM.jl-1","page":"Home","title":"LLVM.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A Julia wrapper for the LLVM C API.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This package provides a shallow wrapper around the LLVM C API. The entire API, wrapped by means of Clang.jl, is available in the LLVM.API submodule. Higher-level wrappers are part of the LLVM top-level module, and are added as the need arises (see COVERAGE.md for a list of wrapped functions).","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Requirements:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Julia 0.7 or higher","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pkg.add(\"LLVM\")\nusing LLVM\n\n# optionally\nPkg.test(\"LLVM\")","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The package uses the LLVM library bundled with Julia. This is only possible when the LLVM library is built dynamically (USE_LLVM_SHLIB=1), which has been the default since Julia 0.5. Use of the system LLVM library is not possible; this functionality has been removed from LLVM.jl starting with v1.0.","category":"page"},{"location":"man/troubleshooting/#Troubleshooting-1","page":"Troubleshooting","title":"Troubleshooting","text":"","category":"section"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"You can enable verbose logging using two environment variables:","category":"page"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"DEBUG: if set, enable additional (possibly costly) run-time checks, and some more verbose output\nTRACE: if set, the DEBUG level will be activated, in addition with a trace of every call to the underlying library","category":"page"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"In order to avoid run-time cost for checking the log level, these flags are implemented by means of global constants. As a result, you need to run Julia with precompilation disabled if you want to modify these flags:","category":"page"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"$ TRACE=1 julia --compilecache=no examples/sum.jl 1 2\nTRACE: LLVM.jl is running in trace mode, this will generate a lot of additional output\n...","category":"page"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"Enabling colors with --color=yes is also recommended as it color-codes the output.","category":"page"},{"location":"man/troubleshooting/#Building-llvm-extra-fails-due-to-C11-ABI-issues-1","page":"Troubleshooting","title":"Building llvm-extra fails due to C++11 ABI issues","text":"","category":"section"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"The build step might fail at building the llvm-extra wrapper with errors like the following:","category":"page"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"IR/Pass.o:(.data.rel.ro._ZTVN4llvm15JuliaModulePassE[_ZTVN4llvm15JuliaModulePassE]+0x40): undefined reference to `llvm::ModulePass::createPrinterPass(llvm::raw_ostream&, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const&) const'\nIR/Pass.o:(.data.rel.ro._ZTVN4llvm17JuliaFunctionPassE[_ZTVN4llvm17JuliaFunctionPassE]+0x40): undefined reference to `llvm::FunctionPass::createPrinterPass(llvm::raw_ostream&, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const&) const'\nIR/Pass.o:(.data.rel.ro._ZTVN4llvm19JuliaBasicBlockPassE[_ZTVN4llvm19JuliaBasicBlockPassE]+0x40): undefined reference to `llvm::BasicBlockPass::createPrinterPass(llvm::raw_ostream&, std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> > const&) const'\ncollect2: error: ld returned 1 exit status","category":"page"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"IR/Pass.o:(.data.rel.ro._ZTVN4llvm15JuliaModulePassE[_ZTVN4llvm15JuliaModulePassE]+0x40): undefined reference to `llvm::ModulePass::createPrinterPass(llvm::raw_ostream&, std::string const&) const'\nIR/Pass.o:(.data.rel.ro._ZTVN4llvm17JuliaFunctionPassE[_ZTVN4llvm17JuliaFunctionPassE]+0x40): undefined reference to `llvm::FunctionPass::createPrinterPass(llvm::raw_ostream&, std::string const&) const'\nIR/Pass.o:(.data.rel.ro._ZTVN4llvm19JuliaBasicBlockPassE[_ZTVN4llvm19JuliaBasicBlockPassE]+0x40): undefined reference to `llvm::BasicBlockPass::createPrinterPass(llvm::raw_ostream&, std::string const&) const'\ncollect2: error: ld returned 1 exit status","category":"page"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"These indicate a mismatch between the C++ ABI of the LLVM library (more specifically, caused by the C++11 ABI change), and what your compiler selects by default. The Makefile in this package tries to detect any C++11 ABI symbols in the selected LLVM library and configures GLIBC accordingly, but this detection might fail when objdump is not available on your system, or might not help if the target compiler doesn't support said ABI.","category":"page"},{"location":"man/troubleshooting/#","page":"Troubleshooting","title":"Troubleshooting","text":"Most if these issues can be fixed by using the same compiler LLVM was build with to compile llvm-extra. You can override the selected compiler by defining the CC and CXX environment variables, eg. CC=clang CXX=clang++ julia -e 'Pkg.build(\"LLVM\")'.","category":"page"}]
}
