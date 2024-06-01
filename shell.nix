{pkgs ? import <nixpkgs> { } }:
with pkgs;
mkShell {
  nativeBuildInputs = [ hugo ];
}
