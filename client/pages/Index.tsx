import { Eye, Copy, ChevronRight } from "lucide-react";

interface DonationLink {
  id: number;
  title: string;
  createdAt: string;
  requestedAmount: string;
  donors: string;
  receivedAmount: string;
}

const donationLinks: DonationLink[] = [
  {
    id: 1,
    title: "Nos ajude a melhorar a cultura de doação brasileira",
    createdAt: "12/12/2024",
    requestedAmount: "R$ 15,00",
    donors: "-",
    receivedAmount: "-",
  },
  {
    id: 2,
    title: "Nos ajude a melhorar a cultura de doação brasileira",
    createdAt: "12/12/2024",
    requestedAmount: "Aberto",
    donors: "8",
    receivedAmount: "R$ 50,00",
  },
  {
    id: 3,
    title: "Nos ajude a melhorar a cultura de doação brasileira",
    createdAt: "12/12/2024",
    requestedAmount: "R$ 1000000000,00",
    donors: "1000000000",
    receivedAmount: "R$ 1000000000,00",
  },
  {
    id: 4,
    title: "Nos ajude a melhorar a cultura de doação brasileira",
    createdAt: "12/12/2024",
    requestedAmount: "R$ 1000000000,00",
    donors: "1000000000",
    receivedAmount: "R$ 1000000000,00",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F9F9FD]">
      <header className="border-b border-[#D9D9DD] bg-[#F9F9FD] px-8 py-4">
        <div className="mx-auto flex max-w-[1376px] items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="border-r border-[#D9D9DD] pr-2">
              <div className="flex h-[26.57px] w-[147px] items-center justify-center">
                <span className="text-xl font-semibold text-[#0F5996]">
                  herois.club
                </span>
              </div>
            </div>
            <div className="px-2">
              <span className="text-base text-[#3B3B3F]">
                Organização Chico Bento
              </span>
            </div>
          </div>
          <button className="flex items-center gap-2 text-base text-[#3B3B3F] hover:opacity-80 transition-opacity">
            <span>Sair</span>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1376px] px-8 py-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between gap-8 rounded-sm border border-[#D9D9DD] bg-white p-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium text-[#1B1B1E]">
                Criar link de doação
              </h2>
              <div className="flex flex-col gap-2">
                <label className="text-base text-[#3B3B3F]">
                  Escolha um valor ou deixe o doador decidir
                </label>
                <div className="flex h-14 items-center gap-2.5 rounded border-2 border-[#D9D9DD] bg-white px-4">
                  <span className="text-lg text-[#3B3B3F]">R$</span>
                  <span className="text-lg text-[#1B1B1E]">|</span>
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-lg bg-[#0F5996] px-4 py-4 text-base text-[#F9F9FD] hover:bg-[#0D4A7A] transition-colors">
              Doador escolhe o valor
            </button>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-sm border border-[#D9D9DD] bg-white p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-[#1B1B1E]">
                  Doações do mês
                </h2>
                <button className="rounded-3xl p-1 hover:bg-gray-100 transition-colors">
                  <Eye className="h-6 w-6 text-[#3B3B3F]" />
                </button>
              </div>
              <div className="flex items-end gap-1">
                <div className="pb-[7px]">
                  <span className="text-lg font-bold text-[#1B1B1E]">R$</span>
                </div>
                <span className="text-[32px] leading-[48px] text-[#1B1B1E]">
                  12.000,00
                </span>
              </div>
              <div className="flex items-center justify-between rounded bg-[#E3EFFB] px-4 py-2">
                <span className="text-base text-[#105B93]">
                  Entradas previstas
                </span>
                <span className="text-base font-medium text-[#105B93]">
                  + R$ 2.000,00
                </span>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 rounded border border-[#0F5996] px-4 py-4 text-base text-[#0F5996] hover:bg-[#E3EFFB] transition-colors">
              Saque
            </button>
          </div>
        </div>

        <div className="rounded-sm border border-[#D9D9DD] bg-white p-6">
          <h2 className="mb-4 text-lg font-medium text-[#1B1B1E]">
            Links de doação (4)
          </h2>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex border-b border-[#D9D9DD]">
                <div className="flex-1 bg-[#E3EFFB] px-4 py-3 rounded-tl">
                  <span className="text-sm font-medium text-[#1B1B1E]">
                    Título do link
                  </span>
                </div>
                <div className="w-[104px] bg-[#E3EFFB] px-4 py-3">
                  <span className="text-sm font-medium text-[#1B1B1E]">
                    Criado em
                  </span>
                </div>
                <div className="w-[158px] bg-[#E3EFFB] px-4 py-3">
                  <span className="text-sm font-medium text-[#1B1B1E]">
                    Valor pedido
                  </span>
                </div>
                <div className="w-[116px] bg-[#E3EFFB] px-4 py-3">
                  <span className="text-sm font-medium text-[#1B1B1E]">
                    Doadores
                  </span>
                </div>
                <div className="w-[158px] bg-[#E3EFFB] px-4 py-3">
                  <span className="text-sm font-medium text-[#1B1B1E]">
                    Valor recebido
                  </span>
                </div>
                <div className="w-[150px] bg-[#E3EFFB] px-4 py-3 rounded-tr"></div>
              </div>

              {donationLinks.map((link) => (
                <div key={link.id} className="flex border-b border-[#D9D9DD]">
                  <div className="flex-1 px-4 py-4 bg-white">
                    <p className="line-clamp-1 text-sm text-[#5A5A5D]">
                      {link.title}
                    </p>
                  </div>
                  <div className="w-[104px] px-4 py-4 bg-white flex items-center">
                    <span className="text-sm text-[#5A5A5D]">
                      {link.createdAt}
                    </span>
                  </div>
                  <div className="w-[158px] px-4 py-4 bg-white flex items-center">
                    <span className="text-sm text-[#5A5A5D]">
                      {link.requestedAmount}
                    </span>
                  </div>
                  <div className="w-[116px] px-4 py-4 bg-white flex items-center">
                    <span className="text-sm text-[#5A5A5D]">
                      {link.donors}
                    </span>
                  </div>
                  <div className="w-[158px] px-4 py-4 bg-white flex items-center">
                    <span className="text-sm text-[#5A5A5D]">
                      {link.receivedAmount}
                    </span>
                  </div>
                  <div className="w-[150px] px-4 py-4 bg-white flex items-center gap-2">
                    <button className="flex items-center gap-2 rounded bg-[#E3EFFB] px-1 py-1 hover:bg-[#D0E5F7] transition-colors">
                      <Copy className="h-6 w-6 text-[#0F5996]" />
                    </button>
                    <span className="text-sm text-[#0F5996]">Copiar link</span>
                    <button className="ml-auto p-1 hover:bg-gray-100 rounded transition-colors">
                      <ChevronRight className="h-6 w-6 text-[#6D6D71]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-0">
              <button className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#E3EFFB] text-sm text-[#0F5996] hover:bg-[#D0E5F7] transition-colors">
                1
              </button>
              <button className="flex h-[38px] w-[38px] items-center justify-center rounded-full text-sm text-black hover:bg-gray-100 transition-colors">
                2
              </button>
              <button className="flex h-[38px] w-[38px] items-center justify-center rounded-full text-sm text-black hover:bg-gray-100 transition-colors">
                3
              </button>
            </div>
            <span className="text-sm text-[#5A5A5D]">Total de links: 4</span>
          </div>
        </div>
      </main>
    </div>
  );
}
